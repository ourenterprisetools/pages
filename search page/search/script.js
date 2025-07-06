// Countdown Timer
function startCountdown() {
  // Set countdown to 2 hours from now
  const countdownDate = new Date().getTime() + 1 * 50 * 60 * 1000;

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hours").innerHTML = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds
      .toString()
      .padStart(2, "0");

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add click tracking for CTA buttons
document.querySelectorAll(".claim-btn, .btn-primary").forEach((button) => {
  button.addEventListener("click", function () {
    // Add analytics tracking here
    console.log("CTA button clicked:", this.textContent);
  });
});

// Initialize countdown when page loads
document.addEventListener("DOMContentLoaded", () => {
  startCountdown();

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document
    .querySelectorAll(
      ".testimonial-card, .gift-card, .cause-card, .pricing-card"
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
  const menu = document.querySelector(".mobile-menu");
  if (menu) {
    menu.classList.toggle("active");
  }
}

// Form validation for any contact forms
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("error");
      isValid = false;
    } else {
      input.classList.remove("error");
    }
  });

  return isValid;
}

// Add loading states to buttons
function addLoadingState(button) {
  const originalText = button.textContent;
  button.textContent = "Loading...";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 2000);
}

// Handle form submissions
document.addEventListener("submit", (e) => {
  const form = e.target;
  if (form.classList.contains("contact-form")) {
    e.preventDefault();
    if (validateForm(form)) {
      const submitBtn = form.querySelector('button[type="submit"]');
      addLoadingState(submitBtn);
      // Add actual form submission logic here
    }
  }
});

// Add diabetes-specific event tracking
function trackDiabetesInteraction(action) {
  console.log("Sugar Sweep diabetes interaction:", action);
  // Add analytics tracking for diabetes-related actions
}

// Track blood sugar calculator usage (if added later)
function trackBloodSugarCalculator() {
  trackDiabetesInteraction("blood_sugar_calculator_used");
}

document.querySelectorAll(".claim-btn, .btn-primary").forEach((button) => {
  button.addEventListener("click", function () {
    // Add analytics tracking here
    console.log("Sugar Sweep CTA button clicked:", this.textContent);
  });
});
