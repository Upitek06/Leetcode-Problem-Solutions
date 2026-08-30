class Solution
{
public:
    vector<string> fizzBuzz(int n)
    {
        vector<string> hasil;
        for (int i = 1; i <= n; i++)
        {
            if (i % 3 == 0 && i % 5 == 0)
                hasil.push_back("FizzBuzz");
            else if (i % 3 == 0)
                hasil.push_back("Fizz");
            else if (i % 5 == 0)
                hasil.push_back("Buzz");
            else
                hasil.push_back(to_string(i));
        }
        return hasil;
    }
};