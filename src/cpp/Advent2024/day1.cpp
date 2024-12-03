#include "day1.h"

int main()
{
	std::cout << "Reading list to fix!" << std::endl;
	std::ifstream ListFile("../../../problem/day1/lists.txt");
	std::vector<int> list1; 
	std::vector<int> list2;
	long finalValue = 0;
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

	// Sort the list from small to large
	std::sort(list1.begin(), list1.end());
	std::sort(list2.begin(), list2.end());

	// iterat over both list vectors 
	for (long i = 0; i < std::min(list1.size(), list2.size()); i++)
	{
		finalValue += std::abs(list1[i] - list2[i]);
	}
	std::cout << "Answer: " << finalValue << std::endl;
	std::cout << "\nPress enter to exit" << std::endl;
	std::cin.ignore();
	return 0;
} 
