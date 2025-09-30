// تفعيل قائمة الهامبرغر
function toggleNav() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('open');
}

// إغلاق القائمة عند اختيار رابط (لتحسين تجربة المستخدم)
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  });
});

// إغلاق القائمة عند اختيار رابط (لتحسين تجربة المستخدم)
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  });
});

// معالجة إرسال نموذج التواصل
function submitContact(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const result = document.getElementById('contact-result');

  // تحقق بسيط من الحقول المطلوبة
  if (!name || !phone || !message) {
    result.style.color = 'red';
    result.textContent = 'يرجى ملء جميع الحقول المطلوبة.';
    return false;
  }

  // هنا يمكنك إضافة إرسال البيانات إلى السيرفر عبر AJAX أو API
  // حالياً سنعرض رسالة نجاح فقط

  result.style.color = '#2e8b57';
  result.textContent = 'تم إرسال رسالتك بنجاح، سنرد عليك قريبًا. شكراً!';

  // إعادة تعيين النموذج
  event.target.reset();

  return false;
}

function toggleNav() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('open');
}

document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  });
});

function toggleNav() {
  const navLinks = document.getElementById('nav-links');
  const hamburger = document.querySelector('.hamburger');
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
}

// إغلاق القائمة عند اختيار رابط لتحسين تجربة المستخدم
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.querySelector('.hamburger');
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
});