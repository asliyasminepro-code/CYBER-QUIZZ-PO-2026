/**
 * CYBER PINK — Question Rotation Engine
 *
 * Selects N questions from a category's bank, prioritizing questions the
 * user has NOT yet seen in the current rotation cycle. History is persisted
 * per-category in localStorage so it survives page refreshes.
 *
 * Rotation lifecycle per category:
 *  1. On each attempt, select N questions that have NOT been "seen" yet.
 *  2. Mark selected question IDs as seen.
 *  3. When fewer than N unseen questions remain, draw from the least-recently-seen
 *     questions first, then reset the seen list for a fresh cycle.
 *  4. Replay never re-shows the exact same set — it draws from the rotation.
 */

const STORAGE_PREFIX = "cyber_pink_rotation_";
const STORAGE_VERSION = 1;
const QUESTIONS_PER_QUIZ = 10;

interface RotationState {
  version: number;
  seenIds: number[];   // IDs seen in the current cycle, in order seen
}

function storageKey(categoryId: string): string {
  return `${STORAGE_PREFIX}${categoryId}`;
}

function loadState(categoryId: string): RotationState {
  if (typeof window === "undefined") {
    return { version: STORAGE_VERSION, seenIds: [] };
  }
  try {
    const raw = localStorage.getItem(storageKey(categoryId));
    if (!raw) return { version: STORAGE_VERSION, seenIds: [] };
    const parsed = JSON.parse(raw);
    // Validate structure
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      parsed.version === STORAGE_VERSION &&
      Array.isArray(parsed.seenIds) &&
      parsed.seenIds.every((id: unknown) => typeof id === "number")
    ) {
      return parsed as RotationState;
    }
    return { version: STORAGE_VERSION, seenIds: [] };
  } catch {
    return { version: STORAGE_VERSION, seenIds: [] };
  }
}

function saveState(categoryId: string, state: RotationState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(storageKey(categoryId), JSON.stringify(state));
  } catch {
    // Storage full or private browsing — fail silently
  }
}

/** Fisher-Yates shuffle — never mutates the input array */
function shuffle<T>(arr: readonly T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Select up to `count` question IDs from `allIds`, prioritizing those
 * not yet in `seenIds`. When not enough unseen questions remain, fill in
 * from the least-recently-seen ones.
 */
function selectIds(
  allIds: number[],
  seenIds: number[],
  count: number
): number[] {
  if (allIds.length === 0) return [];
  count = Math.min(count, allIds.length);

  const seenSet = new Set(seenIds);
  const unseen = allIds.filter(id => !seenSet.has(id));

  if (unseen.length >= count) {
    // Happy path: enough unseen questions
    return shuffle(unseen).slice(0, count);
  }

  // Not enough unseen — take all unseen + fill from oldest-seen first
  const selected = shuffle(unseen);
  const needed = count - selected.length;

  // seenIds is ordered oldest-first; oldest = most eligible for re-selection
  const oldSeen = seenIds.filter(id => allIds.includes(id));
  const refill = shuffle(oldSeen).slice(0, needed);
  selected.push(...refill);

  return shuffle(selected); // final shuffle so refill isn't always at end
}

/**
 * Public API: select `QUESTIONS_PER_QUIZ` questions for a category, mark
 * them seen, persist the updated state, and return the selected IDs.
 */
export function pickQuestionsForCategory(
  categoryId: string,
  allQuestionIds: number[]
): number[] {
  if (allQuestionIds.length === 0) return [];

  const state = loadState(categoryId);

  // If every question in the current bank has been seen, start fresh cycle
  const unseenCount = allQuestionIds.filter(id => !state.seenIds.includes(id)).length;
  if (unseenCount === 0) {
    state.seenIds = [];
  }

  const selected = selectIds(allQuestionIds, state.seenIds, QUESTIONS_PER_QUIZ);

  // Mark newly selected as seen (append, maintaining order)
  const newSeenSet = new Set(state.seenIds);
  for (const id of selected) newSeenSet.add(id);
  state.seenIds = [...newSeenSet]; // keep insertion order via Set

  saveState(categoryId, state);
  return selected;
}

/**
 * Returns a snapshot of the rotation progress for display purposes.
 * `seen` = questions encountered in the current cycle.
 * `total` = size of the bank.
 */
export function getRotationProgress(
  categoryId: string,
  allQuestionIds: number[]
): { seen: number; total: number } {
  const state = loadState(categoryId);
  const seen = allQuestionIds.filter(id => state.seenIds.includes(id)).length;
  return { seen, total: allQuestionIds.length };
}

/**
 * Reset the rotation history for a single category (useful for testing or
 * an explicit "Start Over" action; NOT called on normal Replay).
 */
export function resetRotationHistory(categoryId: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(storageKey(categoryId));
  } catch {
    // ignore
  }
}
