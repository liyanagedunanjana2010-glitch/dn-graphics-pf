import React, { useState } from 'react';

const Testimonials = () => {
  // Default Reviews (ආරම්භක Reviews)
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sahan Perera",
      role: "Content Creator",
      review: "DN Graphics made my YouTube thumbnails! CTR went up by 15% in just two weeks.",
      rating: 5,
    },
    {
      id: 2,
      name: "Nipuni Silva",
      role: "Small Business Owner",
      review: "Amazing logo design! Understood my brand vision clearly and delivered fast.",
      rating: 5,
    }
  ]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    review: '',
    rating: 5
  });

  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form input changes handle කිරීම
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit කරද්දී අලුත් Review එක එකතු කිරීම
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.review) return;

    const newReview = {
      id: Date.now(),
      name: formData.name,
      role: formData.role || 'Client',
      review: formData.review,
      rating: Number(formData.rating)
    };

    setReviews([newReview, ...reviews]);
    setSubmitted(true);
    setFormData({ name: '', role: '', review: '', rating: 5 });

    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 3000);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-2">Client Testimonials</h2>
          <p className="text-gray-400">What my clients say & leave your feedback!</p>
          
          {/* Review එකක් එකතු කරන්න Button එක */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-2.5 rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg"
          >
            {showForm ? 'Close Form' : '+ Add Your Review'}
          </button>
        </div>

        {/* 📝 Add Review Form */}
        {showForm && (
          <div className="max-w-xl mx-auto mb-16 bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Leave a Review</h3>
            
            {submitted ? (
              <div className="bg-green-500/20 text-green-400 p-4 rounded-xl text-center border border-green-500/40">
                🎉 Thank you! Your review has been added.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Kamal Perera"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-1">Your Role / Company</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="e.g. Youtuber / Entrepreneur"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-1">Rating</label>
                  <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-yellow-400"
                  >
                    <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
                    <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
                    <option value="3">⭐⭐⭐ (3 Stars)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-1">Your Feedback *</label>
                  <textarea
                    name="review"
                    required
                    rows="4"
                    value={formData.review}
                    onChange={handleChange}
                    placeholder="Write your experience..."
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-yellow-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition duration-300"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        )}

        {/* 🌟 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800/80 p-6 rounded-2xl border border-gray-700/50 shadow-xl flex flex-col justify-between hover:border-yellow-400/50 transition duration-300"
            >
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(item.rating)].map((_, index) => (
                    <span key={index} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-700/50">
                <h4 className="font-bold text-white text-base">{item.name}</h4>
                <p className="text-xs text-yellow-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;