#include "DayOne.h"

DayOne::DayOne(std::string filePath)
{
	std::ifstream ListFile(filePath);
	part1Answer = 0;
	part2Answer = 0;
	std::string line;

	while (std::getline(ListFile, line))
	{
		std::string input;
		std::stringstream ss(line);
		int place = 1;
		while (std::getline(ss, input, ' '))
		{
			if (!input.empty())
			{
				if (place == 1) {
					list1.push_back(std::stoi(input));
					place++;
				}
				else {
					list2.push_back(std::stoi(input));
				}
			}
		}
	}
	// We're done with the file close it
	ListFile.close();
}

int DayOne::GetPartOneAnswer()
{
	// Sort the list from small to large
	std::sort(list1.begin(), list1.end());
	std::sort(list2.begin(), list2.end());

	// iterat over both list vectors 
	for (long i = 0; i < std::min(list1.size(), list2.size()); i++)
	{
		part1Answer += std::abs(list1[i] - list2[i]);
	}
	return part1Answer;
}

int DayOne::GetPartTwoAnswer()
{
	std::vector<int> similarties;

	for (auto list1it = list1.begin(); list1it != list1.end(); list1it++)
	{
		int timesFound = 0;
		for (auto list2it = list2.begin(); list2it != list2.end(); list2it++)
		{
			if (*list1it == *list2it) {
				timesFound++;
			}
		}
		similarties.push_back(*list1it * timesFound);
	}
	for (auto it = similarties.begin(); it != similarties.end(); it++)
	{
		part2Answer += *it;
	}
	return part2Answer;
}