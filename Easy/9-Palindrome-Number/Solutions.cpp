class Solution
{
public:
    bool isPalindrome(int x)
    {
        string angka = to_string(x);
        int j = angka.size() - 1;
        for (int i = 0; i < angka.size(); i++)
        {
            if (angka[i] != angka[j])
            {
                return false;
            }
            j--;
        }
        return true;
    }
};