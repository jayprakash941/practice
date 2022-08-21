// Online C++ compiler to run C++ program online
#include <iostream>
#include <vector>
using namespace std;

class Bucket
{
public:
    virtual int get(int key) = 0;
    virtual void insert(int key) = 0;
    virtual void del(int key) = 0;
};

class Node
{
public:
    int value;
    Node *next;
};

class LinkedList : public Bucket
{
private:
    Node *head;

public:
    void insert(int val)
    {
        Node *node = new Node();
        node->value = val;
        Node *temp = this->head;
        if (this->head == NULL)
        {
            this->head = node;
            return;
        }
        while (temp->next != NULL)
        {
            temp = temp->next;
        }
        temp->next = node;
    }

    int get(int key)
    {
        Node *temp = this->head;
        while (temp != NULL)
        {
            if (temp->value == key)
            {
                return key;
            }
            temp = temp->next;
        }
        return -1;
    }

    void del(int key)
    {
        Node *temp = this->head;
        if (temp->value == key)
        {
            this->head = temp->next;
            return;
        }
        Node *prev = NULL;
        while (temp != NULL && temp->value != key)
        {
            prev = temp;
            temp = temp->next;
        }
        if (temp == NULL)
        {
            return;
        }
        prev->next = temp->next;
    }
};

class MyHashSet
{
private:
    static const int SIZE = 1000000;
    Bucket *keyStore[SIZE];

public:
    MyHashSet()
    {
        for (int i = 0; i < SIZE; i++)
        {
            keyStore[i] = new LinkedList();
        }
    }

    Bucket* getBucket(int key)
    {
        return keyStore[key % SIZE];
    }

    void add(int key)
    {
        Bucket* bucket = this->getBucket(key);
        bucket->insert(key);
    }

    void remove(int key)
    {
        Bucket* bucket = this->getBucket(key);
        bucket->del(key);
    }

    bool contains(int key)
    {
        Bucket* bucket = this->getBucket(key);
        return bucket->get(key) != -1;
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet* obj = new MyHashSet();
 * obj->add(key);
 * obj->remove(key);
 * bool param_3 = obj->contains(key);
 */

int main()
{
    // Write C++ code here
    MyHashSet *hash = new MyHashSet();
    hash->add(123);
    hash->add(1231);
    hash->add(1232);
    hash->add(1233);
    hash->remove(123);
    cout << hash->contains(1233) << "\n";
    return 0;
}