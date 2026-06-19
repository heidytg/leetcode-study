// Design Twitter — https://leetcode.com/problems/design-twitter/
class Twitter {
  private time = 0;
  private tweets = new Map<number, { time: number; id: number }[]>();
  private following = new Map<number, Set<number>>();

  postTweet(userId: number, tweetId: number): void {
    const list = this.tweets.get(userId) ?? [];
    list.push({ time: this.time++, id: tweetId });
    this.tweets.set(userId, list);
  }

  getNewsFeed(userId: number): number[] {
    const all = [...(this.tweets.get(userId) ?? [])];
    const followees = this.following.get(userId);
    if (followees) {
      for (const f of followees) {
        if (f !== userId) all.push(...(this.tweets.get(f) ?? []));
      }
    }
    all.sort((a, b) => b.time - a.time);
    return all.slice(0, 10).map((t) => t.id);
  }

  follow(followerId: number, followeeId: number): void {
    const set = this.following.get(followerId) ?? new Set<number>();
    set.add(followeeId);
    this.following.set(followerId, set);
  }

  unfollow(followerId: number, followeeId: number): void {
    this.following.get(followerId)?.delete(followeeId);
  }
}

export function twitterOps(ops: string[], args: number[][]): number[][] {
  let tw = new Twitter();
  const out: number[][] = [];
  for (let i = 0; i < ops.length; i++) {
    const a = args[i];
    switch (ops[i]) {
      case "Twitter":
        tw = new Twitter();
        break;
      case "postTweet":
        tw.postTweet(a[0], a[1]);
        break;
      case "getNewsFeed":
        out.push(tw.getNewsFeed(a[0]));
        break;
      case "follow":
        tw.follow(a[0], a[1]);
        break;
      case "unfollow":
        tw.unfollow(a[0], a[1]);
        break;
    }
  }
  return out;
}
