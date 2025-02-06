import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = ({ user }) => {
  const { id } = useParams(); // URL থেকে blog_id নিচ্ছি
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    // ব্লগের তথ্য আনবো
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));

    // ব্লগের কমেন্ট আনবো
    fetch(`http://localhost:5000/api/comments/${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);

  // ✅ ২️⃣ নতুন কমেন্ট সাবমিট ফাংশন
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/comments/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        blog_id: id,
        user_name: user?.displayName,
        user_profile_picture: user?.photoURL,
        comment_text: commentText,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setComments([...comments, { user_name: user?.displayName, user_profile_picture: user?.photoURL, comment_text: commentText }]);
          setCommentText("");
        }
      });
  };

  return (
    <div>
      {blog ? (
        <div>
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <p>{blog.description}</p>

          {/* ✅ ৩️⃣ Self-Comment Restriction */}
          {user?.email === blog.authorEmail ? (
            <p className="text-red-500">Cannot comment on your own blog.</p>
          ) : (
            <form onSubmit={handleCommentSubmit}>
              <textarea
                className="w-full p-2 border"
                placeholder="Write your comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                required
              ></textarea>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">Post Comment</button>
            </form>
          )}

          {/* ✅ ৪️⃣ কমেন্ট দেখানো */}
          <div>
            <h2 className="text-2xl font-bold mt-4">Comments</h2>
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="p-2 border mt-2">
                  <img src={comment.user_profile_picture} alt="Profile" className="w-10 h-10 rounded-full" />
                  <p className="font-bold">{comment.user_name}</p>
                  <p>{comment.comment_text}</p>
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>

          {/* ✅ ৫️⃣ Update Button (Conditional Rendering) */}
          {user?.email === blog.authorEmail && (
            <button className="bg-green-500 text-white px-4 py-2 mt-4" onClick={() => navigate(`/update-blog/${id}`)}>
              Update Blog
            </button>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetails;
