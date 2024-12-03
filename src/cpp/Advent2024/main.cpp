#include "DayOne.h";
#include "DayTwo.h";

int main()
{
	/* Begin Day 1 */
	std::cout << "--- Day 1: Historian Hysteria ---" << std::endl;
	DayOne day1("../../../problem/day1/lists");
	std::cout << "Part 1 Answer: " << day1.GetPartOneAnswer() << std::endl;
	std::cout << "Part 2 Answer: " << day1.GetPartTwoAnswer() << std::endl;
	std::cout << std::endl;
	/* End Day 1 */
	
	/* Begin Day 2 */
	std::cout << "--- Day 2: Red-Nosed Reports ---" << std::endl;
	DayTwo* day2 = new DayTwo("");
	// TODO: Make the code
	delete day2;
	/* Begin Day 2 */

	std::cout << "\nPress enter to exit" << std::endl;
	std::cin.ignore();

	return 0;
}