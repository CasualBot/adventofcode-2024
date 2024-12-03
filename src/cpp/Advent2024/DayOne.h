#pragma once
#include "main.h";
#include <fstream>
#include <sstream>

class DayOne
{
private:
	std::vector<int> list1;
	std::vector<int> list2;
	int part1Answer = 0;
	int part2Answer = 0;
public:
	DayOne(std::string filePath);
	int GetPartOneAnswer();
	int GetPartTwoAnswer();
};

