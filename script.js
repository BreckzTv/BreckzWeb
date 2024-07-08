function searchText() {
    // Alle bisherigen Highlights entfernen
    removeHighlights();

    // Den Suchbegriff vom Eingabefeld abrufen
    var searchInput = document.getElementById('searchInput').value;
    if (!searchInput) {
        return;
    }

    // Den Textinhalt des Content-Bereichs abrufen
    var content = document.getElementById('content');
    var contentText = content.innerHTML;

    // Den Suchbegriff im Textinhalt finden und hervorheben
    var highlightedText = contentText.replace(new RegExp(searchInput, 'gi'), (match) => {
        return '<span class="highlight">' + match + '</span>';
    });

    // Den aktualisierten Inhalt zurück in den Content-Bereich einfügen
    content.innerHTML = highlightedText;
}

function removeHighlights() {
    var content = document.getElementById('content');
    var contentText = content.innerHTML;

    // Entferne alle vorhandenen Highlight-Spans
    var cleanedText = contentText.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
    content.innerHTML = cleanedText;
}
