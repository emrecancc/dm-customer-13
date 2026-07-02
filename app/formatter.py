def format_report(title, count, data, items):
    """Generate a formatted report and summary.

    Parameters
    ----------
    title : str
        The title of the report.
    count : int
        Number of items processed.
    data : dict
        Dictionary containing optional keys ``total`` and ``precision``.
    items : list
        List of item names to include in the summary.
    """
    precision = data.get('precision', 2)
    total = data.get('total', 1)
    rate = count / max(total, 1) * 100
    report = f"Report: {title!r} | Items: {count:,} | Rate: {rate:.{precision}f}%"
    summary = f"Summary: {', '.join(items)}"
    return report, summary
