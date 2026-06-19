package solution

import "sort"

// Design Twitter — https://leetcode.com/problems/design-twitter/
type tweet struct {
	time int
	id   int
}

type Twitter struct {
	time      int
	tweets    map[int][]tweet
	following map[int]map[int]bool
}

func NewTwitter() *Twitter {
	return &Twitter{tweets: map[int][]tweet{}, following: map[int]map[int]bool{}}
}

func (t *Twitter) PostTweet(userId, tweetId int) {
	t.tweets[userId] = append(t.tweets[userId], tweet{t.time, tweetId})
	t.time++
}

func (t *Twitter) GetNewsFeed(userId int) []int {
	all := append([]tweet(nil), t.tweets[userId]...)
	for f := range t.following[userId] {
		if f != userId {
			all = append(all, t.tweets[f]...)
		}
	}
	sort.Slice(all, func(i, j int) bool { return all[i].time > all[j].time })
	res := []int{}
	for i := 0; i < len(all) && i < 10; i++ {
		res = append(res, all[i].id)
	}
	return res
}

func (t *Twitter) Follow(followerId, followeeId int) {
	if t.following[followerId] == nil {
		t.following[followerId] = map[int]bool{}
	}
	t.following[followerId][followeeId] = true
}

func (t *Twitter) Unfollow(followerId, followeeId int) {
	if t.following[followerId] != nil {
		delete(t.following[followerId], followeeId)
	}
}

func twitterOps(ops []string, args [][]int) [][]int {
	tw := NewTwitter()
	out := [][]int{}
	for i, op := range ops {
		switch op {
		case "Twitter":
			tw = NewTwitter()
		case "postTweet":
			tw.PostTweet(args[i][0], args[i][1])
		case "getNewsFeed":
			out = append(out, tw.GetNewsFeed(args[i][0]))
		case "follow":
			tw.Follow(args[i][0], args[i][1])
		case "unfollow":
			tw.Unfollow(args[i][0], args[i][1])
		}
	}
	return out
}
