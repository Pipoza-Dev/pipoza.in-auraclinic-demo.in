/**
 * AuraCare Health & Wellness Clinic - Interactive Appointment Booking Engine
 * Built for Pipiza Dev Studio Showcase Demo
 */

document.addEventListener('DOMContentLoaded', () => {
  initBookingPortal();
});

function initBookingPortal() {
  const bookingForm = document.getElementById('appointmentForm');
  if (!bookingForm) return;

  const deptSelect = document.getElementById('bookingDept');
  const doctorSelect = document.getElementById('bookingDoctor');
  const dateInput = document.getElementById('bookingDate');
  const slotContainer = document.getElementById('slotContainer');
  let selectedSlot = "10:30 AM"; // Default selected slot

  // Check URL params for pre-filled doctor or department
  const urlParams = new URLSearchParams(window.location.search);
  const paramDocId = urlParams.get('doctor');
  const paramDept = urlParams.get('specialty') || urlParams.get('dept');

  // Populate Doctors dropdown based on department
  function populateDoctors(filterDept = '') {
    if (!doctorSelect) return;
    
    let docs = CLINIC_DATA.doctors;
    if (filterDept && filterDept !== 'all') {
      docs = docs.filter(d => d.specialty.toLowerCase().includes(filterDept.toLowerCase()));
    }

    doctorSelect.innerHTML = '<option value="">-- Choose a Specialist --</option>' + 
      docs.map(doc => `
        <option value="${doc.id}" data-dept="${doc.specialty}" data-name="${doc.name}" data-fee="${doc.fee}">
          ${doc.name} (${doc.specialty}) - ${doc.fee}
        </option>
      `).join('');

    // Pre-select if param exists
    if (paramDocId) {
      const match = docs.find(d => d.id === paramDocId);
      if (match) {
        doctorSelect.value = paramDocId;
        updateDoctorSummary(match);
      }
    }
  }

  // Initial population
  populateDoctors(paramDept || '');
  if (paramDept && deptSelect) {
    deptSelect.value = paramDept;
  }

  // Department change listener
  if (deptSelect) {
    deptSelect.addEventListener('change', (e) => {
      populateDoctors(e.target.value);
    });
  }

  // Doctor change listener
  if (doctorSelect) {
    doctorSelect.addEventListener('change', (e) => {
      const doc = CLINIC_DATA.doctors.find(d => d.id === e.target.value);
      updateDoctorSummary(doc);
    });
  }

  // Initialize minimum date (Tomorrow)
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // Slot selector click handling
  if (slotContainer) {
    slotContainer.querySelectorAll('.slot-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        slotContainer.querySelectorAll('.slot-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedSlot = pill.getAttribute('data-slot');
        updateSummarySlot(selectedSlot);
      });
    });
  }

  // Real-time summary updater
  function updateDoctorSummary(doc) {
    const summaryDoc = document.getElementById('summaryDoctor');
    const summaryFee = document.getElementById('summaryFee');
    const summaryAvatar = document.getElementById('summaryAvatar');

    if (doc) {
      if (summaryDoc) summaryDoc.textContent = doc.name;
      if (summaryFee) summaryFee.textContent = doc.fee;
      if (summaryAvatar) summaryAvatar.src = doc.image;
    } else {
      if (summaryDoc) summaryDoc.textContent = "Please select a doctor";
      if (summaryFee) summaryFee.textContent = "$0.00";
    }
  }

  function updateSummarySlot(slot) {
    const summaryTime = document.getElementById('summaryTime');
    if (summaryTime) summaryTime.textContent = slot;
  }

  if (dateInput) {
    dateInput.addEventListener('change', () => {
      const summaryDate = document.getElementById('summaryDate');
      if (summaryDate) summaryDate.textContent = dateInput.value;
    });
  }

  // Handle Form Submission
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedDocId = doctorSelect ? doctorSelect.value : '';
    const selectedDoc = CLINIC_DATA.doctors.find(d => d.id === selectedDocId);
    
    if (!selectedDoc) {
      alert("Please select a specialist before proceeding.");
      doctorSelect.focus();
      return;
    }

    const patientName = document.getElementById('patientName')?.value || 'Valued Guest';
    const patientPhone = document.getElementById('patientPhone')?.value || '+1 (555) 000-0000';
    const patientEmail = document.getElementById('patientEmail')?.value || 'guest@example.com';
    const visitDate = dateInput ? dateInput.value : 'Tomorrow';
    const reason = document.getElementById('visitReason')?.value || 'General Consultation';
    const demoRef = generateDemoCode("AUR-BK");

    // Redirect to success page with full details
    const params = new URLSearchParams({
      type: 'booking',
      ref: demoRef,
      name: patientName,
      doctor: selectedDoc.name,
      dept: selectedDoc.specialty,
      date: visitDate,
      time: selectedSlot,
      fee: selectedDoc.fee
    });

    window.location.href = `success.html?${params.toString()}`;
  });
}
