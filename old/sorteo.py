import selenium
from selenium import webdriver
from selenium.webdriver.edge.webdriver import WebDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC, wait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import time


print('\nEmail de instagram')
email = input()

print('\nContraseña de instagram')
passw = input()

print('\nPone el numero del ultimo comentario (0 si es el primero que se va a hacer)')
start_number = input()

print('\nCada cuanto queres comentar? Tiempo en segundos')
waitfor = int(input())

print('\nCantidad de comentarios por pasada')
cant = int(input())

number = int(start_number) + 1 

while True:

    driver = webdriver.Edge('C:\Webdriver\msedgedriver')
    driver.get('https://www.instagram.com')

    login_field = WebDriverWait(driver, 30).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#loginForm > div > div:nth-child(1) > div > label > input')))
    login_field.click()
    login_field.send_keys(email)

    time.sleep(1)

    pass_field = WebDriverWait(driver, 30).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#loginForm > div > div:nth-child(2) > div > label > input')))
    pass_field.click()
    pass_field.send_keys(passw)
    pass_field.send_keys(Keys.ENTER)

    time.sleep(5)

    driver.get('https://www.instagram.com/p/CYSEmumPaj7/')

    time.sleep(5)

    actions = ActionChains(driver)

    for i in range(cant):
        
        text_field = WebDriverWait(driver, 30).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#react-root > section > main > div > div.ltEKP > article > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div.eo2As > section.sH9wk._JgwE > div > form > textarea')))
        text_field.click()

        actions.send_keys(str(number)).send_keys(Keys.ENTER).perform()

        actions.reset_actions()

        time.sleep(5)
        

    number += 1

    driver.quit()
    print(f'Comentarios hechos, esperando {str(waitfor)} segs...')
    time.sleep(waitfor)