/*
Write a loop that makes seven calls to console.log 
to output the following triangle:

#
##
###
####
#####
######
#######
*/

for (triangle = "#";triangle.length < 8;triangle += "#") {
    console.log(triangle);
}