﻿using Microsoft.EntityFrameworkCore;
using ProEventos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProEventos.Data
{
    public class DataContext : DbContext 
    {
        public DataContext(DbContextOptions <DataContext> options) : base(options)
        {

        }
        public DbSet<Evento> Eventos { get; set; }
    }
}
