# Generated by Django 3.2.7 on 2021-11-14 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_appliances_cloth_furniture_grocery_laptop_mobile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='createdAt',
            field=models.DateTimeField(),
        ),
    ]
