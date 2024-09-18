// Handle posting functionality
document.getElementById('postBtn').addEventListener('click', function() {
    const postText = document.getElementById('postText').value;
    
    if (postText.trim() !== "") {
        const newPost = document.createElement('div');
        newPost.classList.add('post-item');

        // Create the HTML for the new post, including React and Comment section with icons
        newPost.innerHTML = `
            <h4>Username</h4>
            <p>${postText}</p>
            <button class="react-btn"><i class="fas fa-thumbs-up"></i> Like</button>
            <div class="comment-section">
                <input type="text" class="comment-input" placeholder="Add a comment...">
                <button class="comment-btn"><i class="fas fa-comment"></i> Comment</button>
                <div class="comments"></div>
            </div>
        `;

        // Append the new post to the feed
        document.getElementById('feed').prepend(newPost);

        // Clear the textarea
        document.getElementById('postText').value = '';

        // Add functionality for Like button
        const likeButton = newPost.querySelector('.react-btn');
        likeButton.addEventListener('click', function() {
            likeButton.classList.toggle('liked');
            if (likeButton.classList.contains('liked')) {
                likeButton.innerHTML = `<i class="fas fa-thumbs-up"></i> Liked`;
            } else {
                likeButton.innerHTML = `<i class="fas fa-thumbs-up"></i> Like`;
            }
        });

        // Add functionality for adding comments
        const commentBtn = newPost.querySelector('.comment-btn');
        const commentInput = newPost.querySelector('.comment-input');
        const commentsDiv = newPost.querySelector('.comments');

        commentBtn.addEventListener('click', function() {
            const commentText = commentInput.value;
            if (commentText.trim() !== "") {
                const comment = document.createElement('div');
                comment.classList.add('comment');
                comment.innerHTML = `<i class="fas fa-user"></i> ${commentText}`;
                commentsDiv.appendChild(comment);
                commentInput.value = '';
            }
        });
    } else {
        alert('Please enter some text to post.');
    }
});

// Handle profile picture change
const profilePic = document.getElementById('profilePic');
const uploadProfilePic = document.getElementById('uploadProfilePic');

uploadProfilePic.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePic.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

