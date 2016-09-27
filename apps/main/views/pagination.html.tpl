<nav class="pagination-nav" aria-label="Page navigation">
    <ul class="pagination">
        {% if page == 1 %}
            <li class="page-item disabled">
                <a href="#" class="page-link">
                    <span class="fa fa-angle-left" aria-hidden="true"></span> Newer
                </a>
            </li>
        {% else %}
            <li class="page-item">
                <a href="{{ route }}?page={{ page - 1 }}" class="page-link">
                    <span class="fa fa-angle-left" aria-hidden="true"></span> Newer
                </a>
            </li>
        {% endif %}
        
        {% if page == pages %}
            <li class="page-item disabled">
                <a href="#" class="page-link">
                    Older <span class="fa fa-angle-right" aria-hidden="true"></span>
                </a>
            </li>
        {% else %}
            <li class="page-item">
                <a href="{{ route }}?page={{ page + 1 }}" class="page-link">
                    Older <span class="fa fa-angle-right" aria-hidden="true"></span>
                </a>
            </li>
        {% endif %}
    </ul>
</nav>