#!/usr/bin/perl -w

use strict;
use warnings;
use DBI;

my $driver = "SQLite";
my $database = "clubs.db";
my $mydbname = "database of soccer clubs";
my $dsn = "dbi:$driver:dbname=$database";

my $dbh = DBI->connect(
    $dsn,"","", {
    PrintError => 0,
    RaiseError => 1
  })
  or die "Can't connect to db".DBI->errstr;

print "Got the $mydbname:\n";

my $sth;
my @row;

my $stmt = qq(SELECT CLUB_NAME, CLUB_LOCATION, CLUB_COLORS from CLUBS;);
$sth = $dbh->prepare( $stmt );
my $rv = $sth->execute() or die $DBI::errstr;

while (@row = $sth->fetchrow_array()) {
  print join(" | ", @row), "\n";
}
print "That's all the clubs\n";

$dbh->disconnect;
