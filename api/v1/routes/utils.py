# utils.py
import os

def get_current_dir():
    return os.getcwd()

def get_assets_path():
    return os.path.join(os.path.dirname(__file__), '../assets')

def get_images_path():
    return os.path.join(get_assets_path(), 'images')

def get_fonts_path():
    return os.path.join(get_assets_path(), 'fonts')

def get_ui_components_path():
    return os.path.join(os.path.dirname(__file__), 'components')

def get_components_path():
    return os.path.join(get_ui_components_path(), 'components')

def get_images_src_path():
    return os.path.join(get_images_path(), 'rc')

def get_images_build_path():
    return os.path.join(get_images_path(), 'build')

def get_fonts_build_path():
    return os.path.join(get_fonts_path(), 'build')