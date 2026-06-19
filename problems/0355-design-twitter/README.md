# 355. Design Twitter

https://leetcode.com/problems/design-twitter/

- **Difficulty:** Medium
- **Pattern:** Hash maps + k-way merge of recent items
- **Category:** Heap / Priority Queue
- **Tags:** hash-table, linked-list, design, heap

## Statement

Design a simplified Twitter: `postTweet(userId, tweetId)`, `getNewsFeed(userId)` (the 10
most recent tweet ids from the user and those they follow, newest first), `follow`, and
`unfollow`.

## Signature

Class `Twitter` with `postTweet`, `getNewsFeed -> int[]`, `follow`, `unfollow`.

> Tested via `twitterOps(ops, args)`, which returns only the `getNewsFeed` results in order
> (a list of feeds) — void ops produce no entry.

## Constraints

- 1 ≤ userId, tweetId ≤ 10^4; up to 3·10^4 calls.

## Approach

Store per-user tweets as `(timestamp, tweetId)` with a global incrementing clock, and a
per-user follow set. `getNewsFeed` gathers the user's own and followees' tweets and takes
the 10 newest by timestamp. A max-heap over each list's head (k-way merge) yields the top
10 in O(10 log f); collecting and sorting is simpler when lists are small.

## Complexity

- **Time:** postTweet/follow/unfollow O(1); getNewsFeed O(T log T) collecting + sorting (or
  O(10 log f) with a heap merge).
- **Space:** O(total tweets + follow edges).

## Pattern

**Map-of-lists + recency merge.** The signal: a feed/leaderboard combining several
time-ordered sources. Keep per-source ordered lists and merge the most-recent k with a heap
(k-way merge) — the same engine as *Merge k Sorted Lists*.

## Interview notes

- **Brute force → optimal:** Collect all candidate tweets and sort → O(T log T). The
  heap-based k-way merge of the (already time-sorted) per-user lists gives O(10 log f) for
  10 items across f followees — the intended optimization.
- **Key insight:** a global timestamp orders tweets across users; only the 10 newest matter.
- **Edge cases:** user sees their own tweets without following themselves; following then
  unfollowing; fewer than 10 tweets.
- **Common mistakes:** forgetting own tweets; not bounding to 10; double-counting on
  self-follow.
- **Follow-ups:** real heap k-way merge; pagination beyond 10.
- **Related:** Merge k Sorted Lists (23), Kth Largest in a Stream (703).
