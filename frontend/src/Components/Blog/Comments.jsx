import React, { useState } from 'react';
import { FaReply, FaThumbsUp } from 'react-icons/fa';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Jane Smith',
      avatar: 'https://via.placeholder.com/40',
      content: 'Great article! This really helped me understand the concepts better.',
      date: '2024-03-15',
      likes: 5,
      replies: [
        {
          id: 2,
          author: 'John Doe',
          avatar: 'https://via.placeholder.com/40',
          content: 'Thanks for the feedback! Glad it was helpful.',
          date: '2024-03-15',
          likes: 2
        }
      ]
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState(null);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      author: 'Current User',
      avatar: 'https://via.placeholder.com/40',
      content: newComment,
      date: new Date().toLocaleDateString(),
      likes: 0,
      replies: []
    };

    if (replyTo) {
      setComments(prev => prev.map(c => {
        if (c.id === replyTo) {
          return { ...c, replies: [...c.replies, comment] };
        }
        return c;
      }));
      setReplyTo(null);
    } else {
      setComments(prev => [...prev, comment]);
    }

    setNewComment('');
  };

  const handleLike = (commentId, isReply = false, parentId = null) => {
    setComments(prev => prev.map(c => {
      if (isReply && c.id === parentId) {
        return {
          ...c,
          replies: c.replies.map(r => {
            if (r.id === commentId) {
              return { ...r, likes: r.likes + 1 };
            }
            return r;
          })
        };
      }
      if (!isReply && c.id === commentId) {
        return { ...c, likes: c.likes + 1 };
      }
      return c;
    }));
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-base-content">Comments</h2>

      {/* Comment Form */}
      <form onSubmit={handleAddComment} className="space-y-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder={replyTo ? "Write a reply..." : "Write a comment..."}
          className="w-full px-4 py-2 bg-base-200 text-base-content border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          rows="3"
        />
        <div className="flex justify-between items-center">
          {replyTo && (
            <button
              type="button"
              onClick={() => setReplyTo(null)}
              className="text-base-content/70 hover:text-base-content"
            >
              Cancel Reply
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-primary-content rounded-lg hover:bg-primary-focus transition-colors"
          >
            {replyTo ? 'Reply' : 'Comment'}
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map(comment => (
          <div key={comment.id} className="space-y-4">
            {/* Main Comment */}
            <div className="flex gap-4">
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="bg-base-200 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-base-content">{comment.author}</h3>
                      <p className="text-sm text-base-content/70">{comment.date}</p>
                    </div>
                    <button
                      onClick={() => handleLike(comment.id)}
                      className="flex items-center gap-1 text-base-content/70 hover:text-primary"
                    >
                      <FaThumbsUp />
                      <span>{comment.likes}</span>
                    </button>
                  </div>
                  <p className="text-base-content/80">{comment.content}</p>
                </div>
                <button
                  onClick={() => setReplyTo(comment.id)}
                  className="mt-2 flex items-center gap-1 text-base-content/70 hover:text-primary"
                >
                  <FaReply />
                  Reply
                </button>
              </div>
            </div>

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="ml-14 space-y-4">
                {comment.replies.map(reply => (
                  <div key={reply.id} className="flex gap-4">
                    <img
                      src={reply.avatar}
                      alt={reply.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="bg-base-200 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-base-content">{reply.author}</h3>
                            <p className="text-sm text-base-content/70">{reply.date}</p>
                          </div>
                          <button
                            onClick={() => handleLike(reply.id, true, comment.id)}
                            className="flex items-center gap-1 text-base-content/70 hover:text-primary"
                          >
                            <FaThumbsUp />
                            <span>{reply.likes}</span>
                          </button>
                        </div>
                        <p className="text-base-content/80">{reply.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments; 