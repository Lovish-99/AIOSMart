# Generated by Django 3.2.7 on 2021-11-22 10:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_reviewappliance_reviewcloth_reviewfurniture_reviewgrocery_reviewlaptop_reviewmobile'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='mobile',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.mobile'),
        ),
    ]
