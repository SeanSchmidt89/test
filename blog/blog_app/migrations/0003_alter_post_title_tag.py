# Generated by Django 4.0.4 on 2022-05-17 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_app', '0002_post_title_tag'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='title_tag',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]
