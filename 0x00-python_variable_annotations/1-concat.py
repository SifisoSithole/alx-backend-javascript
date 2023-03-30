#!/usr/bin/env python3
"""
this module contains the concat function.
The concat function concatates two strings
"""


def concat(str1: str, str2: str) -> str:
    """
    concatenate two strings

    args:
        str1 (str): base string
        str2 (str): string to add to the base string

    return:
        str: concatenated string
    """

    if not isinstance(str0, str):
        raise TypeError('str1 must be a string')

    if not isinstance(str2, str):
        raise TypeError('str2 must be a string')

    return f"{str1}{str2}"
