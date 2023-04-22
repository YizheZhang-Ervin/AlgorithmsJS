-- 编写一个SQL查询来报告每支股票的资本损益。
-- 股票的资本损益是一次或多次买卖股票后的全部收益或损失。
-- 以任意顺序返回结果即可。

--  Stocks 表:
--  +--------------- +----------- +--------------- +--------+
--  | stock_name | operation | operation_day | price |
--      +--------------- +----------- +--------------- +--------+
--  | Leetcode | Buy | 1 | 1000 |
--  | Corona Masks | Buy | 2 | 10 |
--  | Leetcode | Sell | 5 | 9000 |
--  | Handbags | Buy | 17 | 30000 |
--  | Corona Masks | Sell | 3 | 1010 |
--  | Corona Masks | Buy | 4 | 1000 |
--  | Corona Masks | Sell | 5 | 500 |
--  | Corona Masks | Buy | 6 | 1000 |
--  | Handbags | Sell | 29 | 7000 |
--  | Corona Masks | Sell | 10 | 10000 |
--      +--------------- +----------- +--------------- +--------+

--  Result 表:
--  +---------------+-------------------+
--  | stock_name    | capital_gain_loss |
--  +---------------+-------------------+
--  | Corona Masks  | 9500              |
--  | Leetcode      | 8000              |
--  | Handbags      | -23000            |
--  +---------------+-------------------+

select stock_name,
sum(
    case 
    when operation ="Buy" then -price else price 
    end
    ) "capital_gain_loss"
from Stocks group by stock_name order by operation_day;