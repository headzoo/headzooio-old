<nav class="pagination-nav" aria-label="Page navigation">
    <ul class="pagination">
        {% if page == 1 %}
            <li class="page-item disabled">
                <a href="#" class="page-link">
                    &laquo; Newer
                </a>
            </li>
        {% else %}
            <li class="page-item">
                <a href="{{ route }}?page={{ page - 1 }}" class="page-link">
                    &laquo; Newer
                </a>
            </li>
        {% endif %}
        
        {% if page == pages %}
            <li class="page-item disabled">
                <a href="#" class="page-link">
                    Older &raquo;
                </a>
            </li>
        {% else %}
            <li class="page-item">
                <a href="{{ route }}?page={{ page + 1 }}" class="page-link">
                    Older &raquo;
                </a>
            </li>
        {% endif %}
    </ul>
</nav>