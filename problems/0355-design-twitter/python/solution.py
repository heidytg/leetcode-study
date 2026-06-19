class Twitter:
    """Design Twitter — https://leetcode.com/problems/design-twitter/"""

    def __init__(self):
        self.time = 0
        self.tweets = {}      # userId -> [(time, tweetId)]
        self.following = {}   # userId -> set of followees

    def postTweet(self, userId, tweetId):
        self.tweets.setdefault(userId, []).append((self.time, tweetId))
        self.time += 1

    def getNewsFeed(self, userId):
        users = set(self.following.get(userId, set())) | {userId}
        all_tweets = []
        for u in users:
            all_tweets.extend(self.tweets.get(u, []))
        all_tweets.sort(reverse=True)
        return [tid for _, tid in all_tweets[:10]]

    def follow(self, followerId, followeeId):
        self.following.setdefault(followerId, set()).add(followeeId)

    def unfollow(self, followerId, followeeId):
        self.following.get(followerId, set()).discard(followeeId)


def twitterOps(ops, args):
    """Test driver: returns the getNewsFeed results in order."""
    tw = Twitter()
    out = []
    for op, arg in zip(ops, args):
        if op == "Twitter":
            tw = Twitter()
        elif op == "postTweet":
            tw.postTweet(arg[0], arg[1])
        elif op == "getNewsFeed":
            out.append(tw.getNewsFeed(arg[0]))
        elif op == "follow":
            tw.follow(arg[0], arg[1])
        elif op == "unfollow":
            tw.unfollow(arg[0], arg[1])
    return out
