import subprocess
import webbrowser
import time
import os
import socket
import psutil  # Asegúrate de instalar psutil con `pip install psutil`

# Ruta al directorio de tu proyecto Angular y servidor de la API
angular_project_dir = "/home/eiler/Documentos/Universidad/SegundoSemestre2024/Archivos/Proyecto1/app/FRONTEND/"
api_project_dir = "/home/eiler/Documentos/Universidad/SegundoSemestre2024/Archivos/Proyecto1/app/BACKEND/"

# Puertos que se utilizarán
api_port = 3010
angular_port = 4200

# Función para verificar si un puerto está en uso
def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        return sock.connect_ex(('localhost', port)) == 0

# Función para cerrar un proceso que utiliza un puerto
def close_process_using_port(port):
    for proc in psutil.process_iter(['pid', 'name']):
        try:
            for conn in proc.connections(kind='inet'):
                if conn.laddr.port == port:
                    print(f"Cerrando proceso {proc.info['name']} (PID: {proc.info['pid']}) que utiliza el puerto {port}...")
                    proc.terminate()  # Termina el proceso
                    proc.wait()  # Espera a que el proceso se cierre
                    print(f"Proceso {proc.info['name']} cerrado.")
                    return  # Salimos de la función después de cerrar el proceso
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            continue  # Ignora procesos que no existen o que no se pueden acceder

# Función para iniciar el servidor de la API
def start_api():
    if is_port_in_use(api_port):
        close_process_using_port(api_port)

    print("Iniciando servidor de la API...")
    os.chdir(api_project_dir)
    subprocess.Popen(["node", "servidor.js"])  # Reemplaza "servidor.js" con tu archivo de inicio de la API
    time.sleep(5)  # Dale tiempo para que el servidor se levante

# Función para iniciar el servidor de Angular
def start_angular():
    if is_port_in_use(angular_port):
        print(f"El puerto {angular_port} ya está en uso. Puede ingresar al servidor de Angular.")
    else:
        print("Iniciando servidor de Angular...")
        os.chdir(angular_project_dir)
        subprocess.Popen(["ng", "serve"])  # Esto ejecuta 'ng serve'
        time.sleep(5)  # Espera un tiempo para que el servidor se levante


# Función para abrir el navegador en la aplicación Angular
def open_browser():
    print("Abriendo el navegador en Brave...")
    brave_path = "/usr/bin/brave"  # Para Linux
    webbrowser.register('brave', None, webbrowser.BackgroundBrowser(brave_path))
    webbrowser.get('brave').open('http://localhost:4200', new=2)  # URL del servidor de Angular

if __name__ == "__main__":
    # Inicia los servidores
    start_angular()
    start_api()
    # Abre el navegador
    open_browser()
