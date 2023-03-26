import createCommentElements from './createComment.js';

describe('createCommentElements', () => {
  test('returns an array of comment elements', () => {
    // Arrange
    const comments = [
      {
        creation_date: '2022-01-01',
        username: 'user1',
        comment: 'This movie was great!',
      },
      {
        creation_date: '2022-01-02',
        username: 'user2',
        comment: 'I really enjoyed this movie.',
      },
    ];

    // Act
    const result = createCommentElements(comments);

    // Assert
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(3);
  });
});
