import unittest
from selenium import webdriver


class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.close()

    def test_search_in_python_org(self):
        driver = self.driver
        driver.get("http://localhost:8080")
        self.assertEqual("MVP", driver.title)


if __name__ == "__main__":
    unittest.main()
