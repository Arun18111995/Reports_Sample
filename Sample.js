async function fetchDataFromJSONPlaceholder() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); // Log the fetched data to the console

    // You can process the data here, for example, displaying it on a webpage
    // Example: Display the title of the first post
    if (data.length > 0) {
      console.log("Title of the first post:", data[0].title);
    }

    return data; // Return the fetched data if needed

  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null or handle the error appropriately
  }
}

// Call the function to fetch and display the data
fetchDataFromJSONPlaceholder();

//Example of fetching a single post.
async function fetchSinglePost(postId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error fetching post ${postId}:`, error);
    return null;
  }
}

fetchSinglePost(1); //fetch post with id of 1.

//Example of fetching posts with query parameters.
async function fetchPostsByUser(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error fetching posts for user ${userId}:`, error);
    return null;
  }
}

fetchPostsByUser(2); //fetch all posts from user with id of 2.
