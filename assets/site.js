// YouTube loads only after a click, so the page stays light and sets no cookies up front.
document.querySelectorAll('.video[data-youtube]').forEach((el) => {
  el.addEventListener('click', () => {
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${el.dataset.youtube}?autoplay=1&rel=0`;
    frame.title = el.getAttribute('aria-label') || 'Video';
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    el.replaceChildren(frame);
    el.removeAttribute('aria-label');
    el.style.cursor = 'default';
  }, { once: true });
});

// Screenshot lightbox
const dialog = document.querySelector('.lightbox');
const shots = [...document.querySelectorAll('.gallery button')];
if (dialog && shots.length) {
  const img = dialog.querySelector('img');
  const caption = dialog.querySelector('p');
  let index = 0;

  const show = (i) => {
    index = (i + shots.length) % shots.length;
    const thumb = shots[index].querySelector('img');
    img.src = shots[index].dataset.full;
    img.alt = thumb.alt;
    caption.textContent = `${thumb.alt} · ${index + 1} / ${shots.length}`;
  };

  shots.forEach((btn, i) => btn.addEventListener('click', () => {
    show(i);
    dialog.showModal();
  }));
  dialog.querySelector('.lb-prev').addEventListener('click', () => show(index - 1));
  dialog.querySelector('.lb-next').addEventListener('click', () => show(index + 1));
  dialog.querySelector('.lb-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });

  let startX = null;
  dialog.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  dialog.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    startX = null;
  });
}
