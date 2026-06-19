package solution

import "container/list"

// LRU Cache — https://leetcode.com/problems/lru-cache/
type entry struct {
	key, value int
}

type LRUCache struct {
	capacity int
	ll       *list.List               // front = most recently used
	items    map[int]*list.Element    // key -> element holding *entry
}

func Constructor(capacity int) LRUCache {
	return LRUCache{
		capacity: capacity,
		ll:       list.New(),
		items:    make(map[int]*list.Element),
	}
}

func (c *LRUCache) Get(key int) int {
	if el, ok := c.items[key]; ok {
		c.ll.MoveToFront(el)
		return el.Value.(*entry).value
	}
	return -1
}

func (c *LRUCache) Put(key, value int) {
	if el, ok := c.items[key]; ok {
		el.Value.(*entry).value = value
		c.ll.MoveToFront(el)
		return
	}
	c.items[key] = c.ll.PushFront(&entry{key, value})
	if c.ll.Len() > c.capacity {
		oldest := c.ll.Back()
		if oldest != nil {
			c.ll.Remove(oldest)
			delete(c.items, oldest.Value.(*entry).key)
		}
	}
}

func lruCacheOps(ops []string, args [][]int) []*int {
	var cache LRUCache
	out := []*int{}
	for i, op := range ops {
		switch op {
		case "LRUCache":
			cache = Constructor(args[i][0])
			out = append(out, nil)
		case "put":
			cache.Put(args[i][0], args[i][1])
			out = append(out, nil)
		case "get":
			v := cache.Get(args[i][0])
			out = append(out, &v)
		}
	}
	return out
}
