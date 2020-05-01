﻿using System;
using System.Collections.Generic;

namespace Persistence.EfCore
{
    public partial class MenuItem
    {
        public MenuItem()
        {
        }

        public MenuItem(int menuId, String name, String ingredients, String alergens, double price, byte[] image)
        {
            MenuId = menuId;
            Name = name;
            Ingredients = ingredients;
            Alergens = alergens;
            Price = price;
            Image = image;
        }

        public int Id { get; set; }
        public int MenuId { get; set; }
        public string Name { get; set; }
        public string Ingredients { get; set; }
        public string Alergens { get; set; }
        public double Price { get; set; }
        public byte[] Image { get; set; }

        public virtual Menu Menu { get; set; }
    }
}