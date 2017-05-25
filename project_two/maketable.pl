#!/usr/bin/perl -w

use strict;
use warnings;
use DBI;

my $dbh = DBI->connect(
  "dbi:SQLite:dbname=clubtable.db","","", {
    PrintError  => 0,
    RaiseError  => 1,
  })
  or die "can't connect to db".DBI->errstr;

$dbh->do("CREATE TABLE IF NOT EXISTS club (id INTEGER PRIMARY KEY, name TEXT, location TEXT, colors TEXT)");
$dbh->do("INSERT INTO club\(name, location, colors) VALUES ('NCFC', 'Raleigh NC', 'red and blue')");
$dbh->do("INSERT INTO club\(name, location, colors) VALUES ('TUSA', 'Chapel Hill NC', 'green and yellow')");
$dbh->do("INSERT INTO club\(name, location, colors) VALUES ('CSL', 'Apex NC', 'red and white')");

my $all = $dbh->selectall_arrayref("SELECT * FROM CLUB");

print "ID | NAME | LOCATION | COLORS \n";

foreach my $row (@$all) {
  my ($id, $name, $location, $colors) = @$row;
  print "$id | $name | $location | $colors \n";
}

$dbh->disconnect;
