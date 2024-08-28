document.getElementById("generateCard").onclick = () => {
  const title = document.getElementById("title").value || "Card Title";
  const description = document.getElementById("description").value || "This is a description of the card.";
  const bgColor = document.getElementById("bgColor").value;
  const textColor = document.getElementById("textColor").value;
  const buttonText = document.getElementById("buttonText").value || "Click Me";
  const buttonColor = document.getElementById("buttonColor").value;

  // Generate HTML
  const cardHtml = `
  <div class="max-w-sm ${bgColor} ${textColor} rounded-lg overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${title}</div>
      <p class="text-base">
        ${description}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <button class="${buttonColor} px-4 py-2 rounded">${buttonText}</button>
    </div>
  </div>
  `;

  // Display the preview
  document.getElementById("cardPreview").innerHTML = cardHtml;

  // Display the generated code
  document.getElementById("generatedCode").value = cardHtml;
}

// Copy the generated code to the clipboard
document.getElementById("copyCode").onclick = () => {
  const generatedCode = document.getElementById("generatedCode");
  generatedCode.select();
  generatedCode.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Code copied to clipboard");
}
