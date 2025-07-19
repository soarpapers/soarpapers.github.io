// script.js

// Filenames in videos/ – 3 per section
const kqVideos   = ['Task1_LMPC.mp4',   'Task2_LMPC.mp4',   'Task3_LMPC.mp4'];
const nmpcVideos = ['Task1_NMPC.mp4', 'task2_NMPC.mp4', 'Task3_NMPC.mp4'];

/**
 * Populate a gallery DIV with video cards.
 * @param {string[]} filenames – list of video files under videos/
 * @param {string}    galleryId – the DIV to fill
 */
function populateGallery(filenames, galleryId) {
  const gallery = document.getElementById(galleryId);
  filenames.forEach((filename, idx) => {
    const card = document.createElement('div');
    card.className = 'video-card';

    const videoEl = document.createElement('video');
    videoEl.controls = true;
    videoEl.src      = `videos/${filename}`;
    videoEl.type     = filename.endsWith('.webm') ? 'video/webm' : 'video/mp4';

    const caption = document.createElement('div');
    caption.className   = 'caption';
    caption.textContent = `Task ${idx + 1}`;

    card.append(videoEl, caption);
    gallery.appendChild(card);
  });
}

// Fill both sections
populateGallery(kqVideos,   'gallery-kq');
populateGallery(nmpcVideos, 'gallery-nmpc');

