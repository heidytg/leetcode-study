def encode(strs):
    """Encode a list of strings to a single string."""
    return "".join(f"{len(s)}#{s}" for s in strs)


def decode(s):
    """Decode a single string back to the list of strings."""
    res = []
    i = 0
    while i < len(s):
        j = i
        while s[j] != "#":
            j += 1
        length = int(s[i:j])
        start = j + 1
        res.append(s[start:start + length])
        i = start + length
    return res
