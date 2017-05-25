# js-html-perl-project
*HTML, vanilla Javascript, CSS, Perl, sqlite*

### PROJECT ONE:
Display of data array in html table using JS (no jquery) and CSS styling.
##### Notes:  
* JS makeTable function accepts two arguments:  data (data for table) and idname (id of page element to hold rendered table).
* Table creates th elements dynamically from keys in data objects.
* Uses ES6 syntax.
* Challenged myself to add table fade-in without using jquery.fadeIn().
* Would prefer to offload data to .json file and call it dynamically but unsure whether that was within the confines of the project since table_data was presented as a var.

### PROJECT TWO:
Create and display three-column table via Perl script.
##### Notes:
* maketable.pl creates sqlite3 db with single table and iterates through rows to print columns.
* readtable.pl uses existing clubs.db created separately with sqlite3, iterates through rows and prints columns.
* readtable.pl accepts $driver and $database strings to create $dsn string to which the Perl DBI module connects.
* Ran into errors when declaring my @row and my $sth vars within statements using previously declared variables, so initialized them separately. 
* Was unclear from the project instructions whether the Perl script should render an HTML document for display so just printed to command line.
* Would love to explore how Perl can render HTML!  This was a very exciting project.

*Thanks for the opportunity to meet Perl - I look forward to getting to know her much better!*

