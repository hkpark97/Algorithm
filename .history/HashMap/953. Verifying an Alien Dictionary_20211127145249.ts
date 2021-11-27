function isAlienSorted(words: string[], order: string): boolean {
    
    const map = {};
    
    for ( let i = 0; i < order.length; i += 1) {
        map[order[i]] = i;
    }
    
    outer:
    for( let i = 0; i < words.length - 1; i+= 1 ) {
        const current = words[i];
        const next = words[i+1];
        const minLength = Math.min(current.length, next.length);
        
        for( let i = 0; i < minLength; i += 1 ) {
            if( current[i] === next[i] ) continue;
            if( map[current[i]] < map[next[i]] ) continue outer;
            if( map[current[i]] > map[next[i]] ) return false;
        }
        if( current.length > next.length ) return false;
    }
    return true;
};

//1. Compare the first character of both strings.
//2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
//3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
//4. Repeat until the end of either string.
//5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

// If map[current[i]] < map[next[i]] we need to return false because we don’t need to compare other characters anymore.
// If map[current[i]] > map[next[i]] we need to go to the next word pair if it exists.

