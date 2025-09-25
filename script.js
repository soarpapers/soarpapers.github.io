// script.js

// Filenames in videos/ – 3 per section
const kqVideos   = ['Task1_LMPC2.mp4',   'Task2_LMPC2.mp4',   'Task3_LMPC.mp4', 'Task4_LMPC.mp4'];
const nmpcVideos = ['Task1_NMPC2.mp4', 'Task2_NMPC2.mp4', 'Task3_NMPC.mp4', 'Task4_NMPC.mp4'];

// Standalone video filename
const standaloneVideo = 'Gazebo.mp4'; // Change this to your actual filename

/**
 * Populate comparison gallery with side-by-side videos
 */
function populateComparisonGallery() {
  const gallery = document.getElementById('comparison-gallery');
  
  // Task details object - customize as needed
  const taskDetails = [
    { 
      number: 1, 
      title: " ",
      description: "Follow a Vertical Line and Hover"
    },
    { 
      number: 2, 
      title: " ",
      description: "Vertical Helix"
    },
    { 
      number: 3, 
      title: "",
      description: "Lemniscate"
    },
    { 
      number: 4, 
      title: " ",
      description: "Knot"
    }
  ];
  
  // Create a row for each task
  for (let i = 0; i < kqVideos.length; i++) {
    const taskRow = document.createElement('div');
    taskRow.className = 'task-row';
    
    // Task header with custom text
    const taskHeader = document.createElement('div');
    taskHeader.className = 'task-header';
    taskHeader.innerHTML = `
      <div>Task ${taskDetails[i].number} ${taskDetails[i].title}</div>
      <div class="task-description">${taskDetails[i].description}</div>
    `;
    taskRow.appendChild(taskHeader);
    
    // Video comparison container
    const videoComparison = document.createElement('div');
    videoComparison.className = 'video-comparison';
    
    // KQ-LMPC video
    const kqCard = createVideoCard(kqVideos[i], 'KQ-LMPC', 'kq-caption');
    videoComparison.appendChild(kqCard);
    
    // NMPC video
    const nmpcCard = createVideoCard(nmpcVideos[i], 'NMPC', 'nmpc-caption');
    videoComparison.appendChild(nmpcCard);
    
    taskRow.appendChild(videoComparison);
    gallery.appendChild(taskRow);
  }
}

/**
 * Create a video card element
 * @param {string} filename - video filename
 * @param {string} captionText - caption text
 * @param {string} captionClass - CSS class for caption
 * @returns {HTMLElement} video card element
 */
function createVideoCard(filename, captionText, captionClass) {
  const card = document.createElement('div');
  card.className = 'video-card';

  const videoEl = document.createElement('video');
  videoEl.controls = true;
  videoEl.src = `videos/${filename}`;
  videoEl.type = filename.endsWith('.webm') ? 'video/webm' : 'video/mp4';

  const caption = document.createElement('div');
  caption.className = `caption ${captionClass}`;
  caption.textContent = captionText;

  card.append(videoEl, caption);
  return card;
}

/**
 * Populate standalone video section
 */
function populateStandaloneVideo() {
  const container = document.getElementById('standalone-video');
  
  const videoCard = document.createElement('div');
  videoCard.className = 'standalone-video-card';
  
  const videoEl = document.createElement('video');
  videoEl.controls = true;
  videoEl.src = `videos/${standaloneVideo}`;
  videoEl.type = standaloneVideo.endsWith('.webm') ? 'video/webm' : 'video/mp4';
  
  const caption = document.createElement('div');
  caption.className = 'standalone-caption';
  caption.textContent = 'Additional Demonstration Video';
  
  videoCard.append(videoEl, caption);
  container.appendChild(videoCard);
}

// Initialize the comparison gallery and standalone video
populateComparisonGallery();
populateStandaloneVideo();