from django.contrib import admin
from .models import Profile, Project, Experience, Education, Skill

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display =  ('name', 'title', 'contact_email', 'phone_number')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'technologies_used', 'project_link')
    
@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'role', 'start_date', 'end_date')
    
@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('institution_name', 'field_of_study', 'start_date', 'end_date')
    
@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'proficiency_level')
    
