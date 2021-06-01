---
title: Oracle SQL Group by functions
created: 2021-06-01T13:05:00.000Z
lastUpdated: 2021-06-01T13:05:00.000Z
tags:
    - SQL 
    - Oracle DB
published: true
description: Explanations of how you can apply group functions and their differences like ROLLUP, GROUPING SETS, CUBE.
---
# Oracle group by functions

If you want to follow along you can use this query for getting the same table as the exercise

```SQL
create table bricks (
  brick_id integer,
  colour   varchar2(10),
  shape    varchar2(10),
  weight   integer
);

insert into bricks values ( 1, 'blue', 'cube', 1 );
insert into bricks values ( 2, 'blue', 'pyramid', 2 );
insert into bricks values ( 3, 'red', 'cube', 1 );
insert into bricks values ( 4, 'red', 'cube', 2 );
insert into bricks values ( 5, 'red', 'pyramid', 3 );
insert into bricks values ( 6, 'green', 'pyramid', 1 );

commit;
```

Group by functions let us analyze information on a table with a single query, for example using the following table.

| BRICK_ID 	| COLOUR 	| SHAPE   	| WEIGHT 	|
|----------	|-----------|-----------|-----------|
| 1        	| blue   	| cube    	| 1      	|
| 2        	| blue   	| pyramid 	| 2      	|
| 3        	| red    	| cube    	| 1      	|
| 4        	| red    	| cube    	| 2      	|
| 5        	| red    	| pyramid 	| 3      	|
| 6        	| green  	| pyramid 	| 1      	|

We can group by colour and get the sum of the weight of all the figures of each colour

```SQL
SELECT colour, SUM(weight)
FROM bricks
GROUP BY colour;
```

The result is:

|COLOUR |SUM(WEIGHT)    |
|------ |-------------- |
|red    | 6             |
|green  | 1             |
|blue   | 3             |

But then imagine that you want to group by but now by shape but also you want to see the group by colour so we can use GROUPING SETS()

```SQL
SELECT colour, shape, SUM(weight)
FROM bricks
GROUP BY GROUPING SETS(colour, shape);
```
So now with these query we obtain the following information.

|COLOUR|SHAPE   |	SUM(WEIGHT)  |
|------|--------|----------------|
| -    |cube    |	4            |
| -    |pyramid |	6            |
|green |	 - 	|   1            |
|blue  | - 	    |   3            |
|red   | - 	    |   6            |