const API_BASE = 'http://localhost:8080/api';

async function fetchNotes() {
  const res = await fetch(`${API_BASE}/notes`);
  const notes = await res.json();
  const container = document.getElementById('notes');
  if (notes.length === 0) container.innerHTML = '<p>No notes yet.</p>';
  else {
    container.innerHTML = notes.map(n => `<div class="note"><strong>#${n.id}</strong> ${escapeHtml(n.text)} <div style="font-size:0.8rem;color:#666">${new Date(n.createdAt).toLocaleString()}</div></div>`).join('');
  }
}

function escapeHtml(s) {
  return s.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

document.getElementById('addForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const textEl = document.getElementById('text');
  const text = textEl.value.trim();
  if (!text) return alert('Enter a note');
  const res = await fetch(`${API_BASE}/notes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  if (res.ok) {
    textEl.value = '';
    fetchNotes();
  } else {
    const err = await res.json();
    alert('Error: ' + (err.error || 'unknown'));
  }
});

fetchNotes();