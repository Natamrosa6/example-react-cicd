
export const getInfo = (object) => {
    if (object) {
        return Object.values(object)
        .map(e => e.name ? e.name : e).join(', ')
    } else {
        return 'none'
    }
}

test('returns "none" when null is passed in', () => {
    expect(getInfo(null)).toBe('none');
});


test('joins names correctly', () => {
    const mockObject = {
        language1: { name: 'English' },
        language2: { name: 'Spanish' }
    };
    expect(getInfo(mockObject)).toBe('English, Spanish');
});
 