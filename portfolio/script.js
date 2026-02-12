(function () {
  'use strict';

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for anchor links (respects prefers-reduced-motion)
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    var targetId = link.getAttribute('href');
    if (targetId === '#') return;
    link.addEventListener('click', function (e) {
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    });
  });

  // Skill tags: click to toggle active state (for engagement)
  document.querySelectorAll('.skill-tag').forEach(function (tag) {
    tag.setAttribute('tabindex', '0');
    tag.addEventListener('click', function () {
      this.classList.toggle('active');
    });
    tag.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.classList.toggle('active');
      }
    });
  });

  // Download PDF: trigger print dialog (user can "Save as PDF")
  var pdfBtn = document.getElementById('pdf-btn');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', function () {
      window.print();
    });
  }

  // Optional: subtle header background on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // Chatbot: name → email → query → mailto
  (function () {
    var messagesEl = document.getElementById('chatbot-messages');
    var inputWrap = document.getElementById('chatbot-input-wrap');
    var input = document.getElementById('chatbot-input');
    var queryEl = document.getElementById('chatbot-query');
    var sendBtn = document.getElementById('chatbot-send');
    var doneEl = document.getElementById('chatbot-done');
    if (!messagesEl || !input || !sendBtn) return;

    var step = 0;
    var data = { name: '', email: '', query: '' };
    var prompts = [
      'Thanks! What\'s your email address?',
      'How can I help? Describe your query in a few lines.',
      null
    ];

    function appendBotMessage(text) {
      var wrap = document.createElement('div');
      wrap.className = 'chat-msg chat-msg-bot';
      wrap.innerHTML = '<span class="chat-avatar" aria-hidden="true">N</span><p class="chat-bubble">' + escapeHtml(text) + '</p>';
      messagesEl.appendChild(wrap);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function appendUserMessage(text) {
      var wrap = document.createElement('div');
      wrap.className = 'chat-msg chat-msg-user';
      wrap.innerHTML = '<span class="chat-avatar" aria-hidden="true">You</span><p class="chat-bubble">' + escapeHtml(text) + '</p>';
      messagesEl.appendChild(wrap);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function escapeHtml(s) {
      var div = document.createElement('div');
      div.textContent = s;
      return div.innerHTML;
    }

    function sendStep() {
      var value = (step === 2 ? queryEl : input).value.trim();
      if (!value) return;

      if (step === 0) {
        data.name = value;
        appendUserMessage(value);
        input.value = '';
        appendBotMessage(prompts[0]);
        input.placeholder = 'Your email…';
        input.setAttribute('autocomplete', 'email');
        step = 1;
      } else if (step === 1) {
        data.email = value;
        appendUserMessage(value);
        input.value = '';
        input.hidden = true;
        queryEl.hidden = false;
        queryEl.placeholder = 'Describe your query…';
        appendBotMessage(prompts[1]);
        step = 2;
        queryEl.focus();
      } else if (step === 2) {
        data.query = value;
        appendUserMessage(value);
        queryEl.value = '';
        queryEl.hidden = true;
        input.hidden = false;
        inputWrap.style.display = 'none';
        doneEl.hidden = false;

        var subject = 'Portfolio contact from ' + data.name;
        var body = 'Name: ' + data.name + '\nEmail: ' + data.email + '\n\nQuery:\n' + data.query;
        var mailto = 'mailto:nuzhatnaz611@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        window.location.href = mailto;

        appendBotMessage('I\'ve opened your email client so you can send the message. If it didn\'t open, email me at nuzhatnaz611@gmail.com with the details above.');
        messagesEl.scrollTop = messagesEl.scrollHeight;
      }
    }

    sendBtn.addEventListener('click', sendStep);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendStep();
      }
    });
    queryEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendStep();
      }
    });
  })();
})();
