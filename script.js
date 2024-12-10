document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('view-pdf');
    const modal = document.getElementById('pdf-modal');
    const closeModal = document.getElementById('close-modal');
    const pdfFrame = document.getElementById('pdf-frame');
    const pdfPath = 'img/JOSSELIN PIERRE CV.pdf';

    button.addEventListener('click', () => {
        pdfFrame.src = pdfPath;
        modal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
            pdfFrame.src = '';
        }
    });

});
